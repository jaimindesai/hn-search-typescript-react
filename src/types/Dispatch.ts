type ActionA = {
  type: 'SET_JOB_TERM';
};
type Action = ActionA;

export type Dispatch = (action: Action) => void;
