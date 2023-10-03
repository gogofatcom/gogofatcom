import { createSlice } from "@reduxjs/toolkit";
import { createContext } from "react";
import React from "react";

export const Languagecontext=createContext({ language: "en",
setLanguage: () => {},});

const Initialstate={
    name:'language',
    aviablelang:['ar','en'],
    defaultlang:'en'
}

