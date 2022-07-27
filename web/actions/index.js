import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json())

// export const useGetHello = () => useSWR('../pages/api/hello', fetcher);

export const useGetReports = (initialData) => {
    return useSWR(`/api/reports`, fetcher, {initialData})
}