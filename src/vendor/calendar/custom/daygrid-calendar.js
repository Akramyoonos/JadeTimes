document.addEventListener("DOMContentLoaded", function () {


	var calendarEl = document.getElementById("dayGrid");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: "prevYear,prev,next,nextYear today",
			center: "title",
			right: "dayGridMonth,dayGridWeek,dayGridDay",
		},
		initialDate: new Date().toISOString(),
		navLinks: true, // can click day/week names to navigate views
		editable: false,
		dayMaxEvents: true, // allow "more" link when too many events

		
		events: [
			{
				title: "All Day Eventca",
				start: '2024-07-08',
				color: "#c7c6ec",
			},
			{
				title: "Long Event",
				start: new Date(),
			
				color: "#a2a0df",
			},
			{
				groupId: 999,
				title: "Birthday",
				start: new Date().toLocaleDateString(),
				color: "#7d7ad2",
			},
			{
				groupId: 999,
				title: "Birthday",
				start: "2022-10-16T16:00:00",
				color: "#5854c5",
			},
			{
				title: "Conference",
				start: "2022-10-11",
				end: "2022-10-13",
				color: "#3f3aab",
			},
			{
				title: "Meeting",
				start: "2022-10-14T10:30:00",
				end: "2022-10-14T12:30:00",
			},
			{
				title: "Lunch",
				start: "2022-10-16T12:00:00",
				color: "#312d85",
			},
			{
				title: "Meeting",
				start: "2022-10-18T14:30:00",
				color: "#ea95bf",
			},
			{
				title: "Interview",
				start: "2022-10-21T17:30:00",
				color: "#b5d085",
			},
			{
				title: "Meeting",
				start: "2022-10-22T20:00:00",
				color: "#c7c6ec",
			},
			{
				title: "Birthday",
				start: "2022-10-13T07:00:00",
				color: "#a2a0df",
			},
			{
				title: "Click for Google",
				url: "http://google.com/",
				start: "2022-10-28",
				color: "#fda901",
			},
			{
				title: "Interview",
				start: "2022-10-20",
				color: "#7d7ad2",
			},
			{
				title: "Product Launch",
				start: "2022-10-29",
				color: "#dd5500",
			},
			{
				title: "Leave",
				start: "2022-10-25",
				color: "#5854c5",
			},
		],
	});

	calendar.render();
});
