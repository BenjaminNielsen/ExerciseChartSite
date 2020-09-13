/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import {Injectable} from '@angular/core'
import API, {graphqlOperation} from '@aws-amplify/api'
import {Observable} from 'zen-observable-ts'

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

export type CreateWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWorkoutMutation = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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

export type GetWorkoutQuery = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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

export type OnCreateWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWorkoutSubscription = {
  __typename: "Workout";
  id: string;
  name: string;
  workoutDate: string;
  workoutNotes: string | null;
  exercises: {
    __typename: "ModelExerciseConnection";
    items: Array<{
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
    nextToken: string | null;
  } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
    exercises: {
      __typename: "ModelExerciseConnection";
      nextToken: string | null;
    } | null;
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
            items {
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
            nextToken
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
            items {
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
            nextToken
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
            items {
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
            nextToken
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
              nextToken
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
              nextToken
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
              nextToken
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
            items {
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
            nextToken
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
              nextToken
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
              nextToken
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
            items {
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
            nextToken
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
            items {
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
            nextToken
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
            items {
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
            nextToken
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
              nextToken
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
              nextToken
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
              nextToken
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
}
