/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateWorkoutInput = {
  id?: string | null;
  name: string;
  workoutDate: string;
  workoutNotes?: string | null;
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null;
  workoutDate?: ModelStringInput | null;
  workoutNotes?: ModelStringInput | null;
  and?: Array<ModelWorkoutConditionInput | null> | null;
  or?: Array<ModelWorkoutConditionInput | null> | null;
  not?: ModelWorkoutConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateWorkoutInput = {
  id: string;
  name?: string | null;
  workoutDate?: string | null;
  workoutNotes?: string | null;
};

export type DeleteWorkoutInput = {
  id?: string | null;
};

export type CreateExerciseInput = {
  id?: string | null;
  workoutID: string;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes?: string | null;
  distance?: number | null;
  distanceUnit?: string | null;
  seconds?: number | null;
  weight?: number | null;
  setOrder?: number | null;
  weightUnit?: string | null;
  reps?: number | null;
};

export type ModelExerciseConditionInput = {
  workoutID?: ModelIDInput | null;
  isMuscleExercise?: ModelBooleanInput | null;
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  distance?: ModelFloatInput | null;
  distanceUnit?: ModelStringInput | null;
  seconds?: ModelIntInput | null;
  weight?: ModelFloatInput | null;
  setOrder?: ModelIntInput | null;
  weightUnit?: ModelStringInput | null;
  reps?: ModelIntInput | null;
  and?: Array<ModelExerciseConditionInput | null> | null;
  or?: Array<ModelExerciseConditionInput | null> | null;
  not?: ModelExerciseConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateExerciseInput = {
  id: string;
  workoutID?: string | null;
  isMuscleExercise?: boolean | null;
  exerciseDate?: string | null;
  name?: string | null;
  notes?: string | null;
  distance?: number | null;
  distanceUnit?: string | null;
  seconds?: number | null;
  weight?: number | null;
  setOrder?: number | null;
  weightUnit?: string | null;
  reps?: number | null;
};

export type DeleteExerciseInput = {
  id?: string | null;
};

export type CreateMuscleExerciseInput = {
  id?: string | null;
  exerciseDate: string;
  name: string;
  notes?: string | null;
  weight?: number | null;
  setOrder?: number | null;
  weightUnit?: string | null;
  reps?: number | null;
};

export type ModelMuscleExerciseConditionInput = {
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  setOrder?: ModelIntInput | null;
  weightUnit?: ModelStringInput | null;
  reps?: ModelIntInput | null;
  and?: Array<ModelMuscleExerciseConditionInput | null> | null;
  or?: Array<ModelMuscleExerciseConditionInput | null> | null;
  not?: ModelMuscleExerciseConditionInput | null;
};

export type UpdateMuscleExerciseInput = {
  id: string;
  exerciseDate?: string | null;
  name?: string | null;
  notes?: string | null;
  weight?: number | null;
  setOrder?: number | null;
  weightUnit?: string | null;
  reps?: number | null;
};

export type DeleteMuscleExerciseInput = {
  id?: string | null;
};

export type CreateCardioExerciseInput = {
  id?: string | null;
  exerciseDate: string;
  name: string;
  notes?: string | null;
  distance?: number | null;
  distanceUnit?: string | null;
  seconds?: number | null;
};

export type ModelCardioExerciseConditionInput = {
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  distance?: ModelFloatInput | null;
  distanceUnit?: ModelStringInput | null;
  seconds?: ModelIntInput | null;
  and?: Array<ModelCardioExerciseConditionInput | null> | null;
  or?: Array<ModelCardioExerciseConditionInput | null> | null;
  not?: ModelCardioExerciseConditionInput | null;
};

export type UpdateCardioExerciseInput = {
  id: string;
  exerciseDate?: string | null;
  name?: string | null;
  notes?: string | null;
  distance?: number | null;
  distanceUnit?: string | null;
  seconds?: number | null;
};

export type DeleteCardioExerciseInput = {
  id?: string | null;
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  workoutDate?: ModelStringInput | null;
  workoutNotes?: ModelStringInput | null;
  and?: Array<ModelWorkoutFilterInput | null> | null;
  or?: Array<ModelWorkoutFilterInput | null> | null;
  not?: ModelWorkoutFilterInput | null;
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null;
  workoutID?: ModelIDInput | null;
  isMuscleExercise?: ModelBooleanInput | null;
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  distance?: ModelFloatInput | null;
  distanceUnit?: ModelStringInput | null;
  seconds?: ModelIntInput | null;
  weight?: ModelFloatInput | null;
  setOrder?: ModelIntInput | null;
  weightUnit?: ModelStringInput | null;
  reps?: ModelIntInput | null;
  and?: Array<ModelExerciseFilterInput | null> | null;
  or?: Array<ModelExerciseFilterInput | null> | null;
  not?: ModelExerciseFilterInput | null;
};

export type ModelMuscleExerciseFilterInput = {
  id?: ModelIDInput | null;
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  setOrder?: ModelIntInput | null;
  weightUnit?: ModelStringInput | null;
  reps?: ModelIntInput | null;
  and?: Array<ModelMuscleExerciseFilterInput | null> | null;
  or?: Array<ModelMuscleExerciseFilterInput | null> | null;
  not?: ModelMuscleExerciseFilterInput | null;
};

export type ModelCardioExerciseFilterInput = {
  id?: ModelIDInput | null;
  exerciseDate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  distance?: ModelFloatInput | null;
  distanceUnit?: ModelStringInput | null;
  seconds?: ModelIntInput | null;
  and?: Array<ModelCardioExerciseFilterInput | null> | null;
  or?: Array<ModelCardioExerciseFilterInput | null> | null;
  not?: ModelCardioExerciseFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateExerciseMutation = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateExerciseMutation = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteExerciseMutation = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMuscleExerciseMutation = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMuscleExerciseMutation = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMuscleExerciseMutation = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardioExerciseMutation = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardioExerciseMutation = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardioExerciseMutation = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetWorkoutQuery = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWorkoutsQuery = {
  __typename: "ModelWorkoutConnection";
  items: Array<{
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetExerciseQuery = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListExercisesQuery = {
  __typename: "ModelExerciseConnection";
  items: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMuscleExerciseQuery = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMuscleExercisesQuery = {
  __typename: "ModelMuscleExerciseConnection";
  items: Array<{
    __typename: "MuscleExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardioExerciseQuery = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCardioExercisesQuery = {
  __typename: "ModelCardioExerciseConnection";
  items: Array<{
    __typename: "CardioExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ExercisesByNameQuery = {
  __typename: "ModelExerciseConnection";
  items: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ExercisesByDateQuery = {
  __typename: "ModelExerciseConnection";
  items: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type MuscleExercisesByNameQuery = {
  __typename: "ModelMuscleExerciseConnection";
  items: Array<{
    __typename: "MuscleExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type MuscleExercisesByDateQuery = {
  __typename: "ModelMuscleExerciseConnection";
  items: Array<{
    __typename: "MuscleExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CardioExercisesByNameQuery = {
  __typename: "ModelCardioExerciseConnection";
  items: Array<{
    __typename: "CardioExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CardioExercisesByDateQuery = {
  __typename: "ModelCardioExerciseConnection";
  items: Array<{
    __typename: "CardioExercise";
    id: string;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: Array<{
    __typename: "Exercise";
    id: string;
    workoutID: string;
    workout: {
      __typename: "Workout";
      id: string;
      name: string;
      workoutDate: string;
      workoutNotes: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    isMuscleExercise: boolean;
    exerciseDate: string;
    name: string;
    notes: string | null;
    distance: number | null;
    distanceUnit: string | null;
    seconds: number | null;
    weight: number | null;
    setOrder: number | null;
    weightUnit: string | null;
    reps: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateExerciseSubscription = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateExerciseSubscription = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteExerciseSubscription = {
  __typename: "Exercise";
  id: string;
  workoutID: string;
  workout: {
    __typename: "Workout";
    id: string;
    name: string;
    workoutDate: string;
    workoutNotes: string | null;
    exercises: Array<{
      __typename: "Exercise";
      id: string;
      workoutID: string;
      isMuscleExercise: boolean;
      exerciseDate: string;
      name: string;
      notes: string | null;
      distance: number | null;
      distanceUnit: string | null;
      seconds: number | null;
      weight: number | null;
      setOrder: number | null;
      weightUnit: string | null;
      reps: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  isMuscleExercise: boolean;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMuscleExerciseSubscription = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMuscleExerciseSubscription = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMuscleExerciseSubscription = {
  __typename: "MuscleExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  weight: number | null;
  setOrder: number | null;
  weightUnit: string | null;
  reps: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardioExerciseSubscription = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardioExerciseSubscription = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardioExerciseSubscription = {
  __typename: "CardioExercise";
  id: string;
  exerciseDate: string;
  name: string;
  notes: string | null;
  distance: number | null;
  distanceUnit: string | null;
  seconds: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateWorkout(
    input: CreateWorkoutInput,
    condition?: ModelWorkoutConditionInput
  ): Promise<CreateWorkoutMutation> {
    const statement = `mutation CreateWorkout($input: CreateWorkoutInput!, $condition: ModelWorkoutConditionInput) {
        createWorkout(input: $input, condition: $condition) {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkoutMutation>response.data.createWorkout;
  }
  async UpdateWorkout(
    input: UpdateWorkoutInput,
    condition?: ModelWorkoutConditionInput
  ): Promise<UpdateWorkoutMutation> {
    const statement = `mutation UpdateWorkout($input: UpdateWorkoutInput!, $condition: ModelWorkoutConditionInput) {
        updateWorkout(input: $input, condition: $condition) {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkoutMutation>response.data.updateWorkout;
  }
  async DeleteWorkout(
    input: DeleteWorkoutInput,
    condition?: ModelWorkoutConditionInput
  ): Promise<DeleteWorkoutMutation> {
    const statement = `mutation DeleteWorkout($input: DeleteWorkoutInput!, $condition: ModelWorkoutConditionInput) {
        deleteWorkout(input: $input, condition: $condition) {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkoutMutation>response.data.deleteWorkout;
  }
  async CreateExercise(
    input: CreateExerciseInput,
    condition?: ModelExerciseConditionInput
  ): Promise<CreateExerciseMutation> {
    const statement = `mutation CreateExercise($input: CreateExerciseInput!, $condition: ModelExerciseConditionInput) {
        createExercise(input: $input, condition: $condition) {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateExerciseMutation>response.data.createExercise;
  }
  async UpdateExercise(
    input: UpdateExerciseInput,
    condition?: ModelExerciseConditionInput
  ): Promise<UpdateExerciseMutation> {
    const statement = `mutation UpdateExercise($input: UpdateExerciseInput!, $condition: ModelExerciseConditionInput) {
        updateExercise(input: $input, condition: $condition) {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateExerciseMutation>response.data.updateExercise;
  }
  async DeleteExercise(
    input: DeleteExerciseInput,
    condition?: ModelExerciseConditionInput
  ): Promise<DeleteExerciseMutation> {
    const statement = `mutation DeleteExercise($input: DeleteExerciseInput!, $condition: ModelExerciseConditionInput) {
        deleteExercise(input: $input, condition: $condition) {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteExerciseMutation>response.data.deleteExercise;
  }
  async CreateMuscleExercise(
    input: CreateMuscleExerciseInput,
    condition?: ModelMuscleExerciseConditionInput
  ): Promise<CreateMuscleExerciseMutation> {
    const statement = `mutation CreateMuscleExercise($input: CreateMuscleExerciseInput!, $condition: ModelMuscleExerciseConditionInput) {
        createMuscleExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMuscleExerciseMutation>response.data.createMuscleExercise;
  }
  async UpdateMuscleExercise(
    input: UpdateMuscleExerciseInput,
    condition?: ModelMuscleExerciseConditionInput
  ): Promise<UpdateMuscleExerciseMutation> {
    const statement = `mutation UpdateMuscleExercise($input: UpdateMuscleExerciseInput!, $condition: ModelMuscleExerciseConditionInput) {
        updateMuscleExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMuscleExerciseMutation>response.data.updateMuscleExercise;
  }
  async DeleteMuscleExercise(
    input: DeleteMuscleExerciseInput,
    condition?: ModelMuscleExerciseConditionInput
  ): Promise<DeleteMuscleExerciseMutation> {
    const statement = `mutation DeleteMuscleExercise($input: DeleteMuscleExerciseInput!, $condition: ModelMuscleExerciseConditionInput) {
        deleteMuscleExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMuscleExerciseMutation>response.data.deleteMuscleExercise;
  }
  async CreateCardioExercise(
    input: CreateCardioExerciseInput,
    condition?: ModelCardioExerciseConditionInput
  ): Promise<CreateCardioExerciseMutation> {
    const statement = `mutation CreateCardioExercise($input: CreateCardioExerciseInput!, $condition: ModelCardioExerciseConditionInput) {
        createCardioExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardioExerciseMutation>response.data.createCardioExercise;
  }
  async UpdateCardioExercise(
    input: UpdateCardioExerciseInput,
    condition?: ModelCardioExerciseConditionInput
  ): Promise<UpdateCardioExerciseMutation> {
    const statement = `mutation UpdateCardioExercise($input: UpdateCardioExerciseInput!, $condition: ModelCardioExerciseConditionInput) {
        updateCardioExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardioExerciseMutation>response.data.updateCardioExercise;
  }
  async DeleteCardioExercise(
    input: DeleteCardioExerciseInput,
    condition?: ModelCardioExerciseConditionInput
  ): Promise<DeleteCardioExerciseMutation> {
    const statement = `mutation DeleteCardioExercise($input: DeleteCardioExerciseInput!, $condition: ModelCardioExerciseConditionInput) {
        deleteCardioExercise(input: $input, condition: $condition) {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardioExerciseMutation>response.data.deleteCardioExercise;
  }
  async GetWorkout(id: string): Promise<GetWorkoutQuery> {
    const statement = `query GetWorkout($id: ID!) {
        getWorkout(id: $id) {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWorkoutQuery>response.data.getWorkout;
  }
  async ListWorkouts(
    filter?: ModelWorkoutFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkoutsQuery> {
    const statement = `query ListWorkouts($filter: ModelWorkoutFilterInput, $limit: Int, $nextToken: String) {
        listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkoutsQuery>response.data.listWorkouts;
  }
  async GetExercise(id: string): Promise<GetExerciseQuery> {
    const statement = `query GetExercise($id: ID!) {
        getExercise(id: $id) {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetExerciseQuery>response.data.getExercise;
  }
  async ListExercises(
    filter?: ModelExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListExercisesQuery> {
    const statement = `query ListExercises($filter: ModelExerciseFilterInput, $limit: Int, $nextToken: String) {
        listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListExercisesQuery>response.data.listExercises;
  }
  async GetMuscleExercise(id: string): Promise<GetMuscleExerciseQuery> {
    const statement = `query GetMuscleExercise($id: ID!) {
        getMuscleExercise(id: $id) {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMuscleExerciseQuery>response.data.getMuscleExercise;
  }
  async ListMuscleExercises(
    filter?: ModelMuscleExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMuscleExercisesQuery> {
    const statement = `query ListMuscleExercises($filter: ModelMuscleExerciseFilterInput, $limit: Int, $nextToken: String) {
        listMuscleExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMuscleExercisesQuery>response.data.listMuscleExercises;
  }
  async GetCardioExercise(id: string): Promise<GetCardioExerciseQuery> {
    const statement = `query GetCardioExercise($id: ID!) {
        getCardioExercise(id: $id) {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardioExerciseQuery>response.data.getCardioExercise;
  }
  async ListCardioExercises(
    filter?: ModelCardioExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardioExercisesQuery> {
    const statement = `query ListCardioExercises($filter: ModelCardioExerciseFilterInput, $limit: Int, $nextToken: String) {
        listCardioExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardioExercisesQuery>response.data.listCardioExercises;
  }
  async ExercisesByName(
    name?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ExercisesByNameQuery> {
    const statement = `query ExercisesByName($name: String, $sortDirection: ModelSortDirection, $filter: ModelExerciseFilterInput, $limit: Int, $nextToken: String) {
        exercisesByName(name: $name, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ExercisesByNameQuery>response.data.exercisesByName;
  }
  async ExercisesByDate(
    exerciseDate?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ExercisesByDateQuery> {
    const statement = `query ExercisesByDate($exerciseDate: AWSDateTime, $sortDirection: ModelSortDirection, $filter: ModelExerciseFilterInput, $limit: Int, $nextToken: String) {
        exercisesByDate(exerciseDate: $exerciseDate, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (exerciseDate) {
      gqlAPIServiceArguments.exerciseDate = exerciseDate;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ExercisesByDateQuery>response.data.exercisesByDate;
  }
  async MuscleExercisesByName(
    name?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelMuscleExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<MuscleExercisesByNameQuery> {
    const statement = `query MuscleExercisesByName($name: String, $sortDirection: ModelSortDirection, $filter: ModelMuscleExerciseFilterInput, $limit: Int, $nextToken: String) {
        muscleExercisesByName(name: $name, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <MuscleExercisesByNameQuery>response.data.muscleExercisesByName;
  }
  async MuscleExercisesByDate(
    exerciseDate?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelMuscleExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<MuscleExercisesByDateQuery> {
    const statement = `query MuscleExercisesByDate($exerciseDate: AWSDateTime, $sortDirection: ModelSortDirection, $filter: ModelMuscleExerciseFilterInput, $limit: Int, $nextToken: String) {
        muscleExercisesByDate(exerciseDate: $exerciseDate, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (exerciseDate) {
      gqlAPIServiceArguments.exerciseDate = exerciseDate;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <MuscleExercisesByDateQuery>response.data.muscleExercisesByDate;
  }
  async CardioExercisesByName(
    name?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardioExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CardioExercisesByNameQuery> {
    const statement = `query CardioExercisesByName($name: String, $sortDirection: ModelSortDirection, $filter: ModelCardioExerciseFilterInput, $limit: Int, $nextToken: String) {
        cardioExercisesByName(name: $name, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CardioExercisesByNameQuery>response.data.cardioExercisesByName;
  }
  async CardioExercisesByDate(
    exerciseDate?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardioExerciseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CardioExercisesByDateQuery> {
    const statement = `query CardioExercisesByDate($exerciseDate: AWSDateTime, $sortDirection: ModelSortDirection, $filter: ModelCardioExerciseFilterInput, $limit: Int, $nextToken: String) {
        cardioExercisesByDate(exerciseDate: $exerciseDate, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (exerciseDate) {
      gqlAPIServiceArguments.exerciseDate = exerciseDate;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CardioExercisesByDateQuery>response.data.cardioExercisesByDate;
  }
  OnCreateWorkoutListener: Observable<
    OnCreateWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWorkout {
        onCreateWorkout {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateWorkoutSubscription>;

  OnUpdateWorkoutListener: Observable<
    OnUpdateWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWorkout {
        onUpdateWorkout {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateWorkoutSubscription>;

  OnDeleteWorkoutListener: Observable<
    OnDeleteWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWorkout {
        onDeleteWorkout {
          __typename
          id
          name
          workoutDate
          workoutNotes
          exercises {
            __typename
            id
            workoutID
            workout {
              __typename
              id
              name
              workoutDate
              workoutNotes
              createdAt
              updatedAt
            }
            isMuscleExercise
            exerciseDate
            name
            notes
            distance
            distanceUnit
            seconds
            weight
            setOrder
            weightUnit
            reps
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteWorkoutSubscription>;

  OnCreateExerciseListener: Observable<
    OnCreateExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateExercise {
        onCreateExercise {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateExerciseSubscription>;

  OnUpdateExerciseListener: Observable<
    OnUpdateExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateExercise {
        onUpdateExercise {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateExerciseSubscription>;

  OnDeleteExerciseListener: Observable<
    OnDeleteExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteExercise {
        onDeleteExercise {
          __typename
          id
          workoutID
          workout {
            __typename
            id
            name
            workoutDate
            workoutNotes
            exercises {
              __typename
              id
              workoutID
              isMuscleExercise
              exerciseDate
              name
              notes
              distance
              distanceUnit
              seconds
              weight
              setOrder
              weightUnit
              reps
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          isMuscleExercise
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteExerciseSubscription>;

  OnCreateMuscleExerciseListener: Observable<
    OnCreateMuscleExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMuscleExercise {
        onCreateMuscleExercise {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMuscleExerciseSubscription>;

  OnUpdateMuscleExerciseListener: Observable<
    OnUpdateMuscleExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMuscleExercise {
        onUpdateMuscleExercise {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateMuscleExerciseSubscription>;

  OnDeleteMuscleExerciseListener: Observable<
    OnDeleteMuscleExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMuscleExercise {
        onDeleteMuscleExercise {
          __typename
          id
          exerciseDate
          name
          notes
          weight
          setOrder
          weightUnit
          reps
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteMuscleExerciseSubscription>;

  OnCreateCardioExerciseListener: Observable<
    OnCreateCardioExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardioExercise {
        onCreateCardioExercise {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCardioExerciseSubscription>;

  OnUpdateCardioExerciseListener: Observable<
    OnUpdateCardioExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardioExercise {
        onUpdateCardioExercise {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCardioExerciseSubscription>;

  OnDeleteCardioExerciseListener: Observable<
    OnDeleteCardioExerciseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardioExercise {
        onDeleteCardioExercise {
          __typename
          id
          exerciseDate
          name
          notes
          distance
          distanceUnit
          seconds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCardioExerciseSubscription>;
}
