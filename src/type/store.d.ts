import { FilterObj, Job } from "@/type/jobs";

export type LoadingStore = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

export type JobsStore = {
  jobs: Job[];
  setJobs: (newJobs: Job[]) => void;
};
export type InputStore = {
  input: FilterObj;
  setInput: (updatedInput: FilterObj) => void;
};

export type ServerStore = {
  status: string;
  message: string;
};
export type ServerState = {
  serverState: ServerStore;
  setServerState: (updatedState: ServerStore) => void;
};

export type GetJobs = { getJobs: () => Promise<void> };
export type Load = { loadMore: () => void };
export type Count = {
  count: number;
  setCount: (fn: (prev: number) => number) => void;
};

export interface CombinedJobs
  extends JobsStore,
    InputStore,
    ServerState,
    LoadingStore,
    GetJobs,
    Count,
    Load {}
