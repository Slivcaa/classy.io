import * as Yup from 'yup';

const classesSchema = Yup.object().shape({
	_id: Yup.string().required(),
	classname: Yup.string().required(),
	description: Yup.string().required(),
	date: Yup.string().required(),
	attendees: Yup.string().required(),
	location: Yup.string().required(),
	no_of_places: Yup.number().required(),
	created_by: Yup.string().required(),
	created_by_name: Yup.string().required(),
	created_date: Yup.string().required(),
});

export default classesSchema;
