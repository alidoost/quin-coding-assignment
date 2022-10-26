export interface Launch {
  id: string;
  slug: string;
  name: string;
  date: string;
  status: {
    id: number;
    name: string;
  };
}
export interface LaunchesState {
  filters: LaunchesFilters;
}

export interface LaunchesFilters {
  startDate: Date;
  endDate: Date;
  isSuccessful: boolean;
}

export const checkLaunchType = (d: any) => {
  if (!d.id || typeof d.id != "string") {
    return false;
  }
  if (!d.net || typeof d.net != "string") {
    console.log(typeof d.net);
    return false;
  }
  if (!d.name || typeof d.name != "string") {
    return false;
  }
  if (!d.slug || typeof d.slug != "string") {
    return false;
  }
  if (!d.status.name || typeof d.status.name != "string") {
    return false;
  }
  if (!d.status.id || typeof d.status.id != "number") {
    return false;
  }
  return true;
};
