export interface ApiService {
  get<T>(url: string, params?: URLSearchParams | Record<string, string> | string[][]): Promise<T>
  post<T>(url: string, data: Record<string, string>): Promise<T>
  put<T>(url: string, data: Record<string, string>): Promise<T>
  patch<T>(url: string, data: Record<string, string>): Promise<T>
  delete<T>(url: string): Promise<T>
}
