function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg text-center">
      <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
       src="https://via.placeholder.com/150"
        alt="User" />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors">John Doe</h1>
      <p className="text-sm md:text-base text-gray-600 hover:shadow-xl transition-shadow">
      Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;