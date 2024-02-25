import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../../services/apiProducts";

export function getProducts() {
  const { isLoading, data:products, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
  });
  return { isLoading, products, error };
}
