const items = [{ id: 1, name: "uk", course: "btech" }];

const getAllItems = (req, res) => {
  res.json(items);
};

const addPost = (req, res) => {
  try {
    const { name, course } = req.body;
    if (!name || !course) {
      return res.status(400).json({
        message: "name and course is required",
      });
    }
    const item = { id: items.length + 1, name, course };
    items.push(item);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: "unexpected error occurred",
    });
  }
};

const updateItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, course } = req.body;
    const item = items.find((i) => i.id === id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (!name && !course) {
      return res
        .status(400)
        .json({ message: "At least one field (name or course) is required" });
    }
    if (name) item.name = name;
    if (course) item.course = course;
    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: "error occurred",
    });
  }
};

const deleteItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Item not found" });
    }
    items.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: "error occured ",
    });
  }
};

export { getAllItems, addPost, updateItem, deleteItem };
