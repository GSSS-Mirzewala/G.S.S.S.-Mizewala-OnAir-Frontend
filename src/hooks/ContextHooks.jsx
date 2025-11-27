// React Context (Hooks)
import { useContext } from "react";

// 1. Basic Preferences Context
import PrefContext from "@/Storage/Preferences";

export const usePreference = () => useContext(PrefContext);

// 2. Holiday Context
import HolidayContext from "@/Storage/Holiday";

export const useHoliday = () => useContext(HolidayContext);
