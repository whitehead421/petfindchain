<template>
  <div class="flex flex-col w-[calc(100%-1rem)] h-full">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">
        <div class="overflow-hidden">
          <table
            class="min-w-full text-left text-xs font-light border border-primary border-collapse"
          >
            <thead class="font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  class="py-2 px-1 text-left text-[10px] truncate font-medium text-neutral-100 uppercase bg-primary"
                  v-for="col in cols"
                  :key="col.key"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in data"
                :key="index"
                @click="$emit('select', row)"
                @dblclick="$emit('dblClickAction', row)"
                class="dark:border-neutral-500 even:bg-slate-100 cursor-pointer hover:bg-gray hover:text-white"
                :class="{
                  '!bg-primary !text-white': isSelected(row),
                }"
              >
                <td
                  v-for="col in cols"
                  :key="col.key"
                  class="py-1 px-2 border truncate"
                >
                  {{ row[col.key] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  cols: {
    type: Array,
    required: true,
  },
  selected: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

defineEmits(["select", "dblClickAction"]);

const isSelected = (row) => {
  if (!props.selected) return false;
  return row["owner"] === props.selected["owner"];
};
</script>
