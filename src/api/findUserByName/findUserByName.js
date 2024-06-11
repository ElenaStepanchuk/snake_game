const FindUserByName = async name => {
  try {
    const response = await fetch(`https://snake-be.onrender.com/api/user/${name}`, {
      method: 'GET',
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

export default FindUserByName;
