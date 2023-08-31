import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import CameraControl from "./UI/CameraControl.jsx";
import NavigationUI from "./UI/NavigationUI.jsx";
import Breadcrumbs from "./UI/Breadcrumbs.jsx";
import ShowModals from "./Modals/ShowModals.jsx";
import Bubble from "./components/Bubble.jsx";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
	const currentVisibleModal = useStore((state) => state.currentVisibleModal);

	return (
		<>
			<Canvas camera={{ position: SCENE.cameraPosition }}>
				<ThreeApp />
			</Canvas>
			<NavigationUI />
			<ShowModals visibleModal={currentVisibleModal} />
		</>
	);
};

export default App;
