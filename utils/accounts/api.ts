const API_ENDPOINT =
  "https://65116d58829fa0248e400a4e.mockapi.io/form/accounts";

export const getData = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    return response.json();
  } catch (error) {
    console.error("something went wrong", error);
  }
};

export const deleteData = async (id: number) => {
  try {
    console.log(id);
    const response = await fetch(API_ENDPOINT);
    alert(id + " is deleted");
    return response.json();
  } catch (error) {
    console.error("something went wrong", error);
  }
};

export const addUser = async (data: any) => {
  try {
    const response = await fetch(API_ENDPOINT);
    alert("user added successfully");
    console.log(data);
    return response.json();
  } catch (error) {
    console.error("something went wrong", error);
  }
};
