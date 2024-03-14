import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board.options";
import { BoardDashboardButton } from "./board-dashboard-button";
interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data} />
      <div className="flex items-center gap-x-3 ml-auto">
        <BoardDashboardButton />
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
