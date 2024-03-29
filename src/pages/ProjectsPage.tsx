import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";
import { FiYoutube } from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import { JsonDump } from "../components/JsonDump";
import { Project, ProjectListEntryQueryDocument } from "../gql/graphql";
import { slidesFromCollection, AssetCollection } from "../utils";
import { Loading } from "./components/Loading";

gql`
  query projectListEntryQuery {
    projectList(id: "4I3FbAncqpeEcqKTQ7o686") {
      sys {
        id
      }
      projectsCollection {
        items {
          sys {
            id
          }
          title
          job
          costumeDesigner
          director
          production
          distribution
          youTubeTrailerLink
          photoSlider {
            slidesCollection {
              total
              skip
              limit
              items {
                url
                width
                height
                title
              }
            }
          }
        }
      }
    }
  }
`;

interface ProjectImageProps {
  collection: AssetCollection | null | undefined;
}

// https://www.contentful.com/developers/docs/references/images-api
const IMG_PARAMS = "?fm=webp&w=1200&fit=pad&q=90";

function ProjectImage({ collection }: ProjectImageProps) {
  const slides = useMemo(() => {
    return slidesFromCollection(collection, {
      params: IMG_PARAMS,
      imageFit: "cover",
    });
  }, [collection]);

  return (
    <div className="sm:basis-1/2 lg:basis-7/12 flex-grow-1 flex-shrink-0">
      <Lightbox
        plugins={[Inline]}
        animation={{ swipe: 300 }}
        styles={{ container: { padding: 0 } }}
        inline={{
          className: "block h-full w-full aspect-video",
        }}
        carousel={{ padding: 0, imageFit: "cover" }}
        slides={slides}
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Pick<
    Project,
    | "title"
    | "job"
    | "costumeDesigner"
    | "director"
    | "production"
    | "distribution"
    | "youTubeTrailerLink"
  > & { photoSlider?: { slidesCollection?: AssetCollection | null } | null };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
      <ProjectImage collection={project.photoSlider?.slidesCollection} />
      <aside className="mt-1 sm:mt-1 lg:mt-3">
        <h2 className="font-sans text-lg lg:text-xl pb-1 lg:pb-2 font-bold leading-normal">
          {project.title}—{project.job}
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-normal">
          {project.costumeDesigner && (
            <p>Costume designer: {project.costumeDesigner}</p>
          )}
          {project.director && <p>Direction: {project.director}</p>}
          {project.production && <p>Production: {project.production}</p>}
          {project.distribution && <p>Distribution: {project.distribution}</p>}
          {project.youTubeTrailerLink && (
            <p>
              <FiYoutube className="inline" />{" "}
              <a
                className="underline hover:font-bold"
                href={project.youTubeTrailerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch the trailer
              </a>
            </p>
          )}
        </div>
      </aside>
    </article>
  );
}

export function ProjectsPage() {
  const { data, error, loading } = useQuery(ProjectListEntryQueryDocument);

  if (loading) return <Loading />;
  if (error) return <JsonDump error={error} />;
  return (
    <section className="flex flex-col gap-10 md:gap-14">
      {data?.projectList?.projectsCollection?.items.map((project) =>
        project ? <ProjectCard key={project.sys.id} project={project} /> : null
      )}
    </section>
  );
}
