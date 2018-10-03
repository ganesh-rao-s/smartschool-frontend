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
            route: "/students",
            children: [],
        },
        {
            menuName: "Teachers",
            route: null,
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
    menuName: "Helpdesk",
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
}]

export default data;