import { atom } from "jotai";

export const isShowModalAtom = atom(false);
export const pronounAtom = atom("He/Him");
export const diagnoseAtom = atom("F43.22 - Adjustment disorder with anxiety");
export const isRiskedAtom = atom(false);
export const clientsAtom = atom([{ type: true, name1: "", name2: "", birth: "", pronoun: "He/Him", diagnose: "F43.22 - Adjustment disorder with anxiety", risk: false, note: ""}]);
export const name1Atom = atom("");
export const name2Atom = atom("");
export const birthyearAtom = atom("1997");
export const noteAtom = atom("");
export const isIndividualAtom = atom(true);
export const clientNameAtom = atom("");
export const clinicianNameAtom = atom("");
