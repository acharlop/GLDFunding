import { createSerializer, matchers } from "jest-emotion";

// Custom DOM elements matchers for Jest
import "@testing-library/jest-dom/extend-expect";

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);
