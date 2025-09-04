interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product ID: {params.id}</h1>
      <p className="text-gray-600 mt-2">This is the product detail page.</p>
    </div>
  );
}
