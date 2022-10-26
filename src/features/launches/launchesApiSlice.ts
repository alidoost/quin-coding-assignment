import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import { checkLaunchType, Launch, LaunchesFilters } from "../../types/launches";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lldev.thespacedevs.com/2.2.0",
  }),
  endpoints(builder) {
    return {
      fetchLaunches: builder.query<Launch[], any | void>({
        query(params: { filters: LaunchesFilters }) {
          var query_params: {
            net__gte?: Date;
            net__lte?: Date;
            status?: number;
          } = {};
          query_params.net__gte = params.filters.startDate;
          query_params.net__lte = params.filters.endDate;
          if (params.filters.isSuccessful === true) {
            query_params.status = 3;
          }

          const query_string = qs.stringify(query_params, {
            encodeValuesOnly: true,
          });
          return `/launch/?${query_string}`;
        },
        transformResponse: (res: any) => {
          const data: Launch[] = res.results
            ? res.results
                .map((d: any) => {
                  if (checkLaunchType(d)) {
                    const launch: Launch = {
                      id: d.id,
                      name: d.name,
                      date: d.net,
                      slug: d.slug,
                      status: {
                        id: d.status.id,
                        name: d.status.name,
                      },
                    };
                    return launch;
                  }
                })
                .filter((d: any) => {
                  return d !== undefined;
                })
            : [];
          return data;
        },
      }),
    };
  },
});

export const { useFetchLaunchesQuery } = apiSlice;
