import React from "react";
import styles from "../styles/components/MainContent.module.scss";
import { useFetchLaunchesQuery } from "../features/launches/launchesApiSlice";
import { useAppSelector } from "../app/hooks";
import FilterForm from "./FilterForm";
import Loading from "./Loading";
import { Launch } from "../types/launches";
import LaunchItem from "./LaunchItem";
import Title from "./Title";

const LaunchesList = () => {
  const { filters } = useAppSelector((state) => state.launches);
  const { data, isFetching, isError } = useFetchLaunchesQuery({ filters });
  const findTheFirstLaunch = (launches: Launch[]) => {
    if (launches.length > 0) {
      var min = launches[0].date;
      var minIndex = 0;
      for (let i = 1; i < launches.length; i++) {
        if (launches[i].date < min) {
          min = launches[i].date;
          minIndex = i;
        }
      }
      return launches[minIndex];
    }
    return null;
  };
  const firstLaunch = data && findTheFirstLaunch(data);
  return (
    <div className={styles.main_content}>
      {isError ? (
        <div className="message message-danger">
          There was an error during calling the API
        </div>
      ) : (
        <>
          {isFetching ? (
            <Loading />
          ) : (
            <>
              {data?.length === 0 ? (
                <div className="message message-info">No Launch founded</div>
              ) : (
                <>
                  {firstLaunch && (
                    <div style={{ marginBottom: 50 }}>
                      <Title>The first occurring launch is:</Title>
                      <LaunchItem launch={firstLaunch} />
                    </div>
                  )}
                  <Title>All Launches:</Title>
                  {data?.map((launch: Launch) => (
                    <LaunchItem launch={launch} />
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LaunchesList;
