import { fetchFilteredCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import Header from "@/app/ui/header";
import Search from '@/app/ui/search';

export default async function Page({
    searchParams,
} : {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    // const currentPage = Number(searchParams?.page) || 1;

    const customers = await fetchFilteredCustomers(query)

    return (
      <div className="w-full">
        <Header title="Customers" />
        <Search placeholder="Search customers..." />

        <CustomersTable customers={customers} />
      </div>
    );
}