// Fetch data from local server
export async function fetchData() {
  try {
    const res = await fetch("http://192.168.1.101:5000/jobs");
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("res.status");
    }
  } catch (error) {
    return "error";
  }
}
