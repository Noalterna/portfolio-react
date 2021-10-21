export function expand() {
    const cursor = document.getElementById("cursor");
    cursor.style.transform = "scale(3.5)";
}
export function shrink() {
    const cursor = document.getElementById("cursor");
    cursor.style.transform = "scale(1)";
}