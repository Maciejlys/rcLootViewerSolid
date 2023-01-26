import { createSignal, createRoot, createEffect, on } from "solid-js";
import { VoteType } from "../models/voteType";

function LocalStorage() {
  const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const setLocalStorage = (key: string, value: any) => {
    localStorage ? localStorage.setItem(key, JSON.stringify(value)) : null;
  };

  return { getLocalStorage, setLocalStorage };
}

export default createRoot(LocalStorage);
