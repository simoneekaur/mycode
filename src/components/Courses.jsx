import React from "react";

const CoursesSection = () => {
  const courseCategories = [
    {
      title: "Degree Courses",
      description:
        "Explore our degree-level courses to shape your future in animation.",
      image: "/degree-course.png",
    },
    {
      title: "Career Courses",
      description: "Specialized training to boost your animation career.",
      categories: [
        { title: "3D Animation", image: "/career-3d.png" },
        { title: "2D Animation", image: "/career-2d.png" },
        { title: "Character Design", image: "/career-character.png" },
      ],
    },
    {
      title: "Specialized Courses",
      description:
        "Master specific skills in animation with our specialized courses.",
      categories: [
        { title: "Maya Training", image: "/maya-course.png" },
        { title: "Autodesk Training", image: "/autodesk-course.png" },
        { title: "VFX Course", image: "/vfx-course.png" },
      ],
    },
    {
      title: "CLI and Cosmos",
      description: "Unlock the future of animation with CLI and Cosmos courses.",
      image: "/cli-cosmos.png",
    },
  ];

  return (
    <section id="courses" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={category.image || category.categories[0]?.image}
              alt={category.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-700 mt-2">{category.description}</p>
              {category.categories && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.categories.map((subCategory, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-500 text-white p-4 rounded-lg text-center"
                    >
                      <img
                        src={subCategory.image}
                        alt={subCategory.title}
                        className="w-16 h-16 mx-auto mb-4"
                      />
                      <h4 className="text-lg">{subCategory.title}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;