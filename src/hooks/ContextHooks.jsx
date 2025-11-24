// React Context (Hooks)
import { useContext } from "react";

// 1. Authentication Context
import AuthContext from "@/Storage/Authentication";

export const useAuth = () => useContext(AuthContext);

// 2. Basic Preferences Context
import PrefContext from "@/Storage/Preferences";

export const usePreference = () => useContext(PrefContext);

// 3. Holiday Context
import HolidayContext from "@/Storage/Holiday";

export const useHoliday = () => useContext(HolidayContext);
