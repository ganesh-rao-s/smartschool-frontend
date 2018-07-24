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
            menuName: "Students",
            route: "/students",
            children: [],
        },
        {
            menuName: "Fees",
            route: null,
            children: [],
        },
        {
            menuName: "Certificates",
            route: null,
            children: [],
        },
    ]
}]

export default data;