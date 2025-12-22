'use client'
import { useQuery } from '@tanstack/react-query'
import { IProduct } from "@/interfaces/IProduct";

interface Filters {
    category?: string;
    discount?: boolean;
    search?: string;
}

export function useProducts(filters: Filters = {}) {
    return useQuery<IProduct[]>({
        queryKey: ['products', filters],
        queryFn: async () => {
            const query = new URLSearchParams();

            if (filters.category) query.append('category', filters.category);
            if(filters.discount) query.append('discount', 'true')
            if(filters.search) query.append('search', filters.search);

            const res = await fetch(`/api/products?${query.toString()}`);
            if (!res.ok) throw new Error("Ошибка загрузки продуктов");
            return res.json();
        }
    });
}