import { GLTF } from "three-stdlib";

export interface IconProps {
  width?: number;
  height?: number;
}

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
};

export const FAQlist = [
  {
    question: "XPERIENCE MOR3 NFT란?",
    answer: "Users play game and go in the draw to win one of the NFT benefits. 3000 holders will receive benefits. ",
    imageUrl: "",
  },
  {
    question: "XPERIENCE MOR3 NFT는 어떻게 획득하나요?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "",
  },
  {
    question: "2차거래는 어디에서 할 수 있나요?",
    answer:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "",
  },
  {
    question: "보유자에게는 어떤 혜택이 있나요?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    imageUrl: "",
  },
  {
    question: "XPERIENCE MOR3 커뮤니티에는 어떻게 참여할 수 있나요?",
    answer:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    imageUrl: "",
  },
  {
    question: "관련 문의는 어디로 하면 될까요?",
    answer:
      "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imageUrl: "",
  },
];
