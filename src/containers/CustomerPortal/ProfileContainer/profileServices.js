/* Event management services */
export const handleLogout = (event) => {
    localStorage.removeItem("user");
    window.location.reload();
}