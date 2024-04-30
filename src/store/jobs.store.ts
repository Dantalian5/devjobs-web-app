import { create } from "zustand";
import { FilterObj, Job } from "@/type/jobs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.ts";

type LoadingStore = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

type JobsStore = {
  jobs: Job[];
  setJobs: (newJobs: Job[]) => void;
};
type InputStore = {
  input: FilterObj;
  setInput: (updatedInput: FilterObj) => void;
};
const filterInitialState: FilterObj = {
  title: "",
  location: "",
  time: false,
};
type ServerStore = {
  status: string;
  message: string;
};
type ServerState = {
  serverState: ServerStore;
  setServerState: (updatedState: ServerStore) => void;
};

type GetJobs = { getJobs: () => Promise<void> };
type Load = { loadMore: () => void };

type Count = {
  count: number;
  setCount: (fn: (prev: number) => number) => void;
};

interface CombinedJobs
  extends JobsStore,
    InputStore,
    ServerState,
    LoadingStore,
    GetJobs,
    Count,
    Load {}

const initialState: ServerStore = { status: "success", message: "" };

export const useJobsStore = create<CombinedJobs>((set) => ({
  count: 12,
  setCount: (fn: (prev: number) => number) =>
    set((state) => ({ count: fn(state.count) })),

  isLoading: false,
  setIsLoading: (value) => set(() => ({ isLoading: value })),

  jobs: [],
  setJobs: (newJobs: Job[]) => set(() => ({ jobs: newJobs })),

  input: filterInitialState,
  setInput: (updatedInput: FilterObj) => set(() => ({ input: updatedInput })),

  serverState: initialState,
  setServerState: (value: ServerStore) => set({ serverState: value }),

  getJobs: async function (): Promise<void> {
    this.setIsLoading(true);
    //const dataFromServer = await fetchData();
    if (navigator.onLine) {
      try {
        const dataFromServer = await getDocs(collection(db, "jobs"));
        const data: any = [];
        dataFromServer.forEach((doc) => {
          data.push(doc.data());
        });
        this.setJobs(data.map((item: Job[]) => ({ ...item, display: true })));
        this.setServerState(initialState);
      } catch (error) {
        this.setServerState({
          status: "error",
          message:
            "Ups...there was an error, please, reload the page to try again",
        });
      }
    } else {
      this.setServerState({
        status: "error",
        message: "Ups...please check your internet :(",
      });
    }
    this.setIsLoading(false);
  },

  loadMore: function (): void {
    this.setIsLoading(true);
    setTimeout(() => {
      this.setCount((prev: number): number =>
        prev < this.jobs.length ? prev + 12 : prev,
      );

      this.setIsLoading(false);
    }, 1000);
  },
}));
