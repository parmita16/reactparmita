export const initialState = {
  strength: 100,
  swordSkill: 50,
  fatigue: 0,
  history: [],
};
export function reducer(state, action) {
  switch (action.type) {
    case "TRAIN_STRENGTH":
      return {   ...state,
        strength: state.strength + 10,
        fatigue: state.fatigue + 5,
        history: [...state.history, "💪 Strength +10"],
      };
    case "TRAIN_SWORD":
      return {   ...state,
        swordSkill: state.swordSkill + 10,
        fatigue: state.fatigue + 10,
        history: [...state.history, "⚔️ Sword Skill +10"],
      };
    case "REST":
      return {   ...state,
        fatigue: Math.max(0, state.fatigue - 15),
        history: [...state.history, "😴 Rested"],
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
