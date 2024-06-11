const UpdateUser = async (id, name, speed = 1, points = 0) => {
  try {
    const response = await fetch(`https://snake-be.onrender.com/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_name: name, speed, points }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export default UpdateUser;
