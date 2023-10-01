import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out`);
      queryClient.invalidateQueries({ active: true });
      // navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Booking could not be checked out");
    },
  });

  return { checkout, isCheckingOut };
}
