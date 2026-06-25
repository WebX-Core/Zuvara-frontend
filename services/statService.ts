import { api } from "@/config/axios-config";
import type { StatsResponse } from "@/type/statType";

export const statService = {
  /**
   * Fetch all stats from the backend
   */
  async getAllStats(): Promise<StatsResponse> {
    const response = await api.get<StatsResponse>("/stat/get-all");
    return response.data;
  },
};

export default statService;
