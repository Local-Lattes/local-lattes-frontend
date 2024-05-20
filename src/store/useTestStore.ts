import { create } from "zustand";

export type TestState = {
  value: string;
  updateValue: (newValue: string) => void;
};

export const useTestStore = create<TestState>((set) => ({
  value: "Hello World!",
  updateValue: (newValue) => set({ value: newValue }),
}));
