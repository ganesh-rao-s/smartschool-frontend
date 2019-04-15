const data = [{
    menuName: "Dashboard",
    route: "/",
    children: [],
},
{
    menuName: "Admin",
    route: null,
    children: [
        {
            menuName: "List of Values",
            route: "/lov",
            children: [],

        }]
},
{
    menuName: "Office",
    route: null,
    children: [
        {
            menuName: "Admission",
            route: "/admission",
            children: [],
        },
        {
            menuName: "Students",
            route: "/students",
            children: [],
        },
        {
            menuName: "Teachers",
            route: "/teachers",
            children: [],
        },
        {
            menuName: "Classes",
            route: null,
            children: [],
        },
    ]
},
{
    menuName: "Directory",
    route: null,
    children: [
        {
            menuName: "Students Directory",
            route: null,
            children: [],

        },
        {
            menuName: "Parents Directory",
            route: null,
            children: [],

        }]
},{
    menuName: "Time Table",
    route: "/timetable",
    children: []
},
{
    menuName: "Events",
    route: null,
    children: []
},
{
    menuName: "Attendance",
    route: "/attendance",
    children: []
},
{
    menuName: "Marks",
    route: null,
    children: []
},
{
    menuName: "Reports",
    route: null,
    children: [
        {
            menuName: "Admission Count",
            route: null,
            children: [],

        },
        {
            menuName: "Place of Residence",
            route: null,
            children: [],

        },
        {
            menuName: "Caste category",
            route: null,
            children: [],

        }]
}]

export default data;