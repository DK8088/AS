import { useEffect, useState } from "react";

function useJsonData(path) {
	const [data, setData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const loadData = async () => {
			setData({ data: null, loading: true, error: null });

			try {
				const res = await fetch(`http://localhost:5001/${path}/`);
				if (!res.ok) throw new Error("Failed to load JSON file");

				const json = await res.json();

				setData({ data: json, loading: false, error: null });
			} catch (err) {
				setData({ data: null, loading: false, error: err.message });
			}
		};

		loadData();
	}, [path]);

	return data;
}

export default useJsonData;
