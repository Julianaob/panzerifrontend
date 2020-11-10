import i18next from 'i18next';
import Evaluation from './Evaluation';



const EvaluationConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/evaluation',
			component: Evaluation
		}
	]
};

export default EvaluationConfig;

