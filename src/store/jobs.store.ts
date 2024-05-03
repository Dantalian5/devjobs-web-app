import { create } from "zustand";
import { FilterObj, Job } from "@/type/jobs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.ts";
import {
  CombinedJobs,
  ServerStore,
} from "@/type/store";

export const filterInitialState: FilterObj = {
  title: "",
  location: "",
  time: false,
};

const initialState: ServerStore = { status: "success", message: "" };

export const useJobsStore = create<CombinedJobs>((set, get) => ({
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
    set({ isLoading: true });

    //const dataFromServer = await fetchData();
    if (navigator.onLine) {
      try {
        const dataFromServer = await getDocs(collection(db, "jobs"));
        const data: any = [];
        dataFromServer.forEach((doc) => {
          data.push(doc.data());
        });
        set({
          jobs: data.map((item: Job[]) => ({ ...item, display: true })),
          serverState: initialState,
        });
      } catch (error) {
        set({
          serverState: {
            status: "error",
            message:
              "Ups...there was an error, please, reload the page to try again",
          },
        });
      }
    } else {
      set({
        serverState: {
          status: "error",
          message: "Ups...please check your internet :(",
        },
      });
    }
    set({ isLoading: false });
  },

  loadMore: function (): void {
    const { jobs, setCount } = get();
    set({ isLoading: true });

    setTimeout(() => {
      setCount((prev: number): number =>
        prev < jobs.length ? prev + 12 : prev,
      );
      set({ isLoading: false });
    }, 1000);
  },
}))
