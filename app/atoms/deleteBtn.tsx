import { RiDeleteBinLine } from "@remixicon/react";
import { deleteProduct } from "../actions/actions";

export default function DeleteBtn({ id }: { id: string }) {
  const DeleteProdWithId = deleteProduct.bind(null, id);
  return (
    <form action={DeleteProdWithId}>
      <button type="submit">
        <RiDeleteBinLine />
      </button>
    </form>
  );
}
