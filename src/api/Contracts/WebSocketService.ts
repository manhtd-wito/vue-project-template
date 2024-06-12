export interface WebSocketService {
  connect(url: string): void
  send(data: T): void
  close(): void
}
