import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
export const TRACKS = gql`
  # Query goes here
  query getTracks {
    tracksForHome {
      id
      title
      author {
        name
        photo
        id
      }
      thumbnail
      length
      modulesCount
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
