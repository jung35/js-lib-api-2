import CreateLease from "./CreateLease";
import GetLeases from "./GetLeases";
import PatchLease from "./PatchLease";
import { LeaseActions } from "./types";

const LeaseActions: LeaseActions = { GetLeases, CreateLease, PatchLease };

export default LeaseActions;
