# Image Search Project

This project is a simple image search application that utilizes the Weaviate API for image classification and search functionality. It allows users to upload images, associate text descriptions with them, and perform queries to find similar images based on their content.

## Features

- **Image Upload**: Users can upload images to the application and associate descriptive text with each image.

- **Text-based Search**: The application provides a search functionality that allows users to find images similar to a given query text.

- **Weaviate Integration**: The project integrates with the Weaviate API, utilizing its image classification and search capabilities.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (version X.X.X)
- Weaviate API access (provide instructions or link to documentation on how to set up and obtain API credentials)

## Getting Started

1. Clone the repository:

`git clone https://github.com/your-username/image-search.git`


2. Install dependencies:

`npm install`


3. Configure Weaviate API credentials:
- Open the `config.js` file located in the project root.
- Replace the placeholder values with your actual Weaviate API credentials.
- Save the file.

4. Start the application:

`npm start`

## Usage

1. Upload an image:
- Click the "Upload" button on the home page.
- Select an image file from your device.
- Enter a descriptive text for the uploaded image.
- Submit the form.

2. Perform a search:
- Enter a query text in the search bar on the home page.
- Click the "Search" button.

3. View search results:
- The application will display a list of images similar to the query text.
- Click on an image to see more details.

## Error Handling

The application implements error handling to provide a smooth user experience. If any errors occur during image upload, search queries, or API interactions, appropriate error messages will be displayed to the user.

## Contributing

Contributions to this project are welcome. If you have any suggestions, bug reports, or feature requests, please submit them as GitHub issues or create a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any inquiries or questions, please contact [your-email@example.com](mailto:himanshupoptani12@gmail.com).
