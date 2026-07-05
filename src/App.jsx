import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import StatCard from "./components/StatCard";
import ActionButton from "./components/ActionButton";
import History from "./components/History";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="min-h-screen bg-green-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          ⚔️ Zoro Training Tracker
        </h1> {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StatCard
            title="💪 Strength"
            value={state.strength}
          />
          <StatCard
            title="⚔️ Sword Skill"
            value={state.swordSkill}
          />
          <StatCard
            title="😵 Fatigue"
            value={state.fatigue}
          />
        </div> {}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <ActionButton
            text="💪 Train Strength"
            color="bg-green-600"
            onClick={() =>
              dispatch({ type: "TRAIN_STRENGTH" })
            }
          />
          <ActionButton
            text="⚔️ Train Sword"
            color="bg-emerald-600"
            onClick={() =>
              dispatch({ type: "TRAIN_SWORD" })
            }
          />
          <ActionButton
            text="😴 Rest"
            color="bg-blue-600"
            onClick={() =>
              dispatch({ type: "REST" })
            }
          />
          <ActionButton
            text="🔄 Reset"
            color="bg-red-600"
            onClick={() =>
              dispatch({ type: "RESET" })
            }
          />
        </div> {}
        <History history={state.history} />
      </div>
    </div>
  );      }
export default App;


